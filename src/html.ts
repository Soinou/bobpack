import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";

export function html(serve: boolean, template: string) {
    return new HtmlWebpackPlugin({
        filename: serve ? "index.html" : "../index.html",
        inject: true,
        template: path.resolve(template),
    });
}
