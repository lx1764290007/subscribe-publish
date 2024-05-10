
class vcSubscribePublic {
    constructor() {
        this.eventBus = {}
    }

    /**
     * 事件订阅器
     * @param name String
     * @param fn Function
     */
    subscribe (name, fn) {
        if (fn instanceof Function) {
            if (this.eventBus[name] instanceof Array) {
                this.eventBus[name].push(fn)
            } else {
                this.eventBus[name] = []
                this.eventBus[name].push(fn)
            }

        } else {
            console.warn(fn + ' is not a function')
            // this.eventBus[name] = function(){
            //     return void(0);
            // }
        }
    }
    /**
     * 事件触发-执行阶段
     * @param name string
     * @param args any
     */
    done (name, args) {
        if (this.eventBus[name] instanceof Array) {
            for (let i = 0; i < this.eventBus[name].length; i++) {
                try {
                    this.eventBus[name][i](args)
                } catch (error) {
                    throw error
                }

            }
        }
    }
    /**
     * 事件发布
     * @param name string
     * @param args any
     */
    public (name, ...args) {
        if (this.eventBus[name]) {
            this.done(name, args)
        }
    }
    /**
     * 移除订阅
     * @param name string
     */
    unsubscribe (name) {
        delete this.eventBus[name]
    }

}
export default new vcSubscribePublic()
