import * as path from "path";

export function output(target: string, production: boolean, directory: string, publicPath?: string) {
    if (target === "web") {
        return {
            filename: production ? "[name].[contenthash].js" : "[name].js",
            path: path.resolve(directory),
            publicPath,
        };
    } else {
        return {
            filename: "[name].js",
            path: path.resolve(directory),
        };
    }
}
