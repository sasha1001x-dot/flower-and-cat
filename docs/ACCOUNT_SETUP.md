# 花猫账号部署说明

## 已实现的边界

本地无 cloudEnv 时：必须主动同意本机体验说明并点击体验登录；不会调用微信身份/手机号接口，不会将普通输入冒充已验证手机号。浏览器 localStorage 与微信本机存储互不相通。首页、植物详情深链接和识别入口均要求账号；收藏和经验按账号编号分开保存。旧版本未分账号的本地数据保留在旧键中，不会删除，也不会自动归属某人。

云端模式：由微信云函数 `getWXContext().OPENID` 获取可信调用身份，首次注册写入 users，同一微信身份重复注册返回同一账号。不要信任前端传来的 OpenID、用户编号或手机号。识别函数同样在服务器检查已注册账号，前端页面拦截不是安全边界。

头像采用 chooseAvatar 主动选择、昵称采用 nickname 输入；不使用过时的 getUserProfile 冒充静默获取。手机号必须来自 getPhoneNumber 的一次性 code，在云函数换取，前端只收到掩码，手机号不用于当前的短信登录。UnionID、跨 AppID 合并账号、手机换绑后的跨身份找回均未实现。

“会员”目前只表示普通注册账号，无订阅、付费、权益、积分或支付逻辑。

## 云端部署

1. 配置自己的 AppID 和 `miniprogram/config.js` 的 cloudEnv。
2. 创建 users 集合。客户端读写全部拒绝，只有云函数访问；不得把包含手机号的 users 集合开放给其他用户。
3. 部署 account 云函数，云端安装依赖。该函数默认拒绝首次注册；运营者准备好正式服务条款、运营主体、联系方式、数据保存期限、注销和删除流程后，替换所有草案文案、同步更新前后端 POLICY_VERSION，再将环境变量 ACCEPT_REGISTRATIONS 设置为 true。
4. 部署更新后的 identify 云函数，其依赖 users 集合存在。照片识别配置仍见 README。
5. account/config.json 声明 phonenumber.getPhoneNumber 云调用权限；在微信后台确认账号主体具备该能力、配额和计费条件，不能假设所有账号都可免费调用。此能力是可选项，不应阻断未绑定手机号的用户。
6. 云存储只允许登录用户读取和写入自己创建的头像，禁止公开列举和跨用户写入。头像路径 avatars/{账号编号}/{时间戳}.jpg。服务端更新资料会校验路径属于当前账号，但这不代替云存储访问规则；上线前必须实际测试双账号隔离。旧头像清理、账号删除后的存储清理尚需补齐。
7. 平台后台填写用户隐私保护指引并声明实际使用的头像、昵称、手机号、媒体和第三方处理用途；完成平台要求的隐私授权适配。当前内置文字只是开发草案，不能冒充正式隐私政策。
8. 真机测试：新微信身份注册、重复登录不重复建号、取消头像/手机号授权、不绑定手机号继续使用、跨用户资料隔离、无注册身份调用识别被拒绝、云函数异常、退出后返回受限页面。

## 仍待完成

未部署和真机验收；没有公共经验数据库；本机经验不会因微信登录而自动上传。没有账号注销功能、手机号解绑页面、运营者管理后台、资料内容审核及头像文件配额清理。正式公开注册前必须补齐。注销不能只清除前端缓存，应在服务端删除或按明确政策处置账号、手机号、头像及关联内容。

## 参考接口

- 微信登录：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html
- 微信头像昵称填写：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/userProfile.html
- 微信手机号组件：https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html
- 腾讯 CloudBase：https://www.cloudbase.net/index

本地测试使用 SDK 桩验证身份边界和数据脱敏，不能代替微信接口真机验收。
