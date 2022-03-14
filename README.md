## 说明
#### 消息订阅 - 发布器

## 使用
```javascript
import VCsubscribePublic from 'VC-subscribe-public'

/**
 * 添加订阅
 * @name String 订阅名称
 * @fn Function 回调方法
 */
VCsubscribePublic.subscribe(name, fn);

/**
 * 发布订阅
 * @name String 订阅名称
 * @args any[] 参数
 */
VCsubscribePublic.public(name, ...args);

/**
 * 取消订阅
 * @name String 订阅名称
 */
VCsubscribePublic.unsubscribe(name);

```
