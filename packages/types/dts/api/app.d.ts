/**
 *
 * app的一些响应类型
 *
 * @public
 */
export declare namespace AppResponse {
    /**
     *
     * 一些 创建一个 app 的默认配置
     *
     * @public
     *
     */
    interface defaultConfig {
        /**
         *
         *  app的一些字段配置
         *
         *
         * @public
         */
        field: {
            /**
             * 描述的最大长度
             *
             * @public
             */
            descMaxLength: number;
            /**
             * 应用名的最大长度
             *
             * @public
             */
            nameMaxLength: number;
            /**
             * 应用名的最小长度
             *
             * @public
             */
            nameMinLength: number;
        };
        /**
         * app 配置
         *
         * @public
         */
        app: {
            /**
             * app的各种类型
             *
             * @public
             */
            appType: {
                label: string;
                value: string;
            }[];
        };
    }
}
//# sourceMappingURL=app.d.ts.map