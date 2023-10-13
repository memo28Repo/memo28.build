import {readingWritingSeparationDetor} from '@memo28/utils'
import {mergeFnWithPromiseFn} from '@memo28/types'

export class ComponentsLifeCycles {
    /**
     *
     * 组件初始化
     *
     * @public
     */
    @readingWritingSeparationDetor
    onInit?: mergeFnWithPromiseFn


    /**
     *
     * 组件已加载
     *
     * @public
     */
    @readingWritingSeparationDetor
    onDidMount?: mergeFnWithPromiseFn

    /**
     *
     * 组件更新
     *
     * @public
     */
    @readingWritingSeparationDetor
    onUpdate?: mergeFnWithPromiseFn

    /**
     *
     * 组件卸载
     *
     * @public
     */
    @readingWritingSeparationDetor
    onUnMount?: mergeFnWithPromiseFn


    /**
     *
     * 组件捕捉到异常
     *
     * @public
     */
    @readingWritingSeparationDetor
    onCatch?: mergeFnWithPromiseFn
}

