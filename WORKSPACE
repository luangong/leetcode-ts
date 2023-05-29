load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

##########################################################################################

http_archive(
    name = "aspect_rules_js",
    sha256 = "928ba25fa82cfe7983f89118677413dc74dbc5d0360fa969da07ff22a9306052",
    strip_prefix = "rules_js-1.15.1",
    url = "https://github.com/aspect-build/rules_js/archive/refs/tags/v1.15.1.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

##########################################################################################

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    # 18.12.1 is the highest available version for rules_nodejs 5.8.0 (introduced by
    # aspect_rules_js 1.15.1).
    #
    # LeetCode runs our code with Node.js 16.13.2
    node_version = "16.13.2",
)

##########################################################################################

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

##########################################################################################

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

##########################################################################################

http_archive(
    name = "aspect_rules_ts",
    sha256 = "ace5b609603d9b5b875d56c9c07182357c4ee495030f40dcefb10d443ba8c208",
    strip_prefix = "rules_ts-1.4.0",
    url = "https://github.com/aspect-build/rules_ts/archive/refs/tags/v1.4.0.tar.gz",
)

# Fetches the rules_ts dependencies.
#
# If you want to have a different version of some dependency, you should fetch it BEFORE
# calling this.
#
# Alternatively, you can skip calling this function, so long as you've already fetched all
# the dependencies.
load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(
    # This keeps the TypeScript version in-sync with the editor, which is typically best.
    # ts_version_from = "//:package.json",

    # Alternatively, you could pick a specific version, or use
    # load("@aspect_rules_ts//ts:repositories.bzl", "LATEST_VERSION")
    ts_version = "4.9.4",
)

# Fetch and register Node, if you haven't already
# load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

# nodejs_register_toolchains(
#     name = "node",
#     node_version = DEFAULT_NODE_VERSION,
# )

# # Register aspect_bazel_lib toolchains;
# #
# # If you use npm_translate_lock or npm_import from aspect_rules_js you can omit this
# # block.
# load(
#     "@aspect_bazel_lib//lib:repositories.bzl",
#     "register_copy_directory_toolchains",
#     "register_copy_to_directory_toolchains",
# )

# register_copy_directory_toolchains()
# register_copy_to_directory_toolchains()

##########################################################################################

http_archive(
    name = "aspect_rules_jest",
    sha256 = "abb6bed8b7b22df20d652c60d780cc23e65ffe6c56500d5a9a836a69469f7f99",
    strip_prefix = "rules_jest-0.14.3",
    url = "https://github.com/aspect-build/rules_jest/archive/refs/tags/v0.14.3.tar.gz",
)

# Fetches the rules_jest dependencies
#
# If you want to have a different version of some dependency, you should fetch it BEFORE
# calling this.
#
# Alternatively, you can skip calling this function, so long as you've already fetched all
# the dependencies.
load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")

rules_jest_dependencies()

# Fetches the npm packages for jest-cli
load("@aspect_rules_jest//jest:repositories.bzl", "jest_repositories")

jest_repositories(name = "jest")

load("@jest//:npm_repositories.bzl", jest_npm_repositories = "npm_repositories")

jest_npm_repositories()
