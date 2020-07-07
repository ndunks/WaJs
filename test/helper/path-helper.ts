import path from "path";
import moduleAlias from "module-alias"

export const project_dir = process.cwd();
export const build_dir = path.join(project_dir, 'build-test');

moduleAlias.addAliases({
    "@": path.join(build_dir, 'src'),
    "whatsapp-web-node": path.join(build_dir, 'src'),
    "whatsapp_pb": path.join(project_dir, "etc/whatsapp_pb.js"),
    "../whatsapp_pb": path.join(project_dir, "etc/whatsapp_pb.js")
})