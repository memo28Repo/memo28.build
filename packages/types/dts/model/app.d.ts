/**
 *
 * app 实体
 *
 * @public
 *
 */
export interface appModel {
    /**
     * 应用标识
     *
     * @public
     */
    name: string;
    /**
     * 应用描述
     *
     * @public
     */
    desc?: string;
    /**
     *
     * 应用类型 1. web 2. uniApp 3. h5 4. web component 5. uniApp component
     *
     * @public
     */
    type: number;
    /**
     * 画布Id
     *
     * @public
     */
    canvasId: number;
}
//# sourceMappingURL=app.d.ts.map