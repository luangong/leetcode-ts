load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

##########################################################################################
# https://github.com/aspect-build/rules_js

RULES_JS_TAG = "1.32.1"
RULES_JS_SHA = "7ab2fbe6d79fb3909ad2bf6dcacfae39adcb31c514efa239dd730b4f147c8097"

http_archive(
    name = "aspect_rules_js",
    url = "https://github.com/aspect-build/rules_js/releases/download/v%s/rules_js-v%s.tar.gz" % (RULES_JS_TAG, RULES_JS_TAG),
    sha256 = RULES_JS_SHA,
    strip_prefix = "rules_js-%s" % RULES_JS_TAG,
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

# This brings rules_nodejs v5.8.2
# See https://github.com/aspect-build/rules_js/blob/v1.32.1/js/repositories.bzl
rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",

    # Available Node versions are in
    # https://github.com/bazelbuild/rules_nodejs/blob/5.8.2/nodejs/private/node_versions.bzl
    #
    # LeetCode runs our code with Node 16.13.2, but there is a bug in Node 16.13.2 with
    # ESM loader when running with Bazel, so we use 16.14.2 instead.
    #
    # See https://nodejs.org/en/blog/release/v16.14.0 for more details..
    node_version = "16.14.2",
)

#-----------------------------------------------------------------------------------------

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    npmrc = "//:.npmrc",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

#-----------------------------------------------------------------------------------------

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

##########################################################################################
# https://github.com/aspect-build/rules_ts

RULES_TS_TAG = "1.4.5"
RULES_TS_SHA = "4c3f34fff9f96ffc9c26635d8235a32a23a6797324486c7d23c1dfa477e8b451"

http_archive(
    name = "aspect_rules_ts",
    url = "https://github.com/aspect-build/rules_ts/releases/download/v%s/rules_ts-v%s.tar.gz" % (RULES_TS_TAG, RULES_TS_TAG),
    sha256 = RULES_TS_SHA,
    strip_prefix = "rules_ts-%s" % RULES_TS_TAG,
)

# Fetches the rules_ts dependencies.
#
# If you want to have a different version of some dependency, you should fetch it BEFORE
# calling this.
#
# Alternatively, you can skip calling this function, so long as you’ve already fetched all
# the dependencies.
load("@aspect_rules_ts//ts:repositories.bzl", "rules_ts_dependencies")

rules_ts_dependencies(
    # This keeps the TypeScript version in-sync with the editor, which is typically best.
    ts_version_from = "//:package.json",

    # Alternatively, you could pick a specific version, or use
    # load("@aspect_rules_ts//ts:repositories.bzl", "LATEST_VERSION")
    # ts_version = "5.1.6",
)

##########################################################################################
# https://github.com/aspect-build/rules_jest

RULES_JEST_TAG = "0.19.5"
RULES_JEST_SHA = "098186ffc450f2a604843d8ba14217088a0e259ea6a03294af5360a7f1bcd3e8"

http_archive(
    name = "aspect_rules_jest",
    url = "https://github.com/aspect-build/rules_jest/releases/download/v%s/rules_jest-v%s.tar.gz" % (RULES_JEST_TAG, RULES_JEST_TAG),
    sha256 = RULES_JEST_SHA,
    strip_prefix = "rules_jest-%s" % RULES_JEST_TAG,
)

# Fetches the rules_jest dependencies
#
# If you want to have a different version of some dependency, you should fetch it BEFORE
# calling this.
#
# Alternatively, you can skip calling this function, so long as you’ve already fetched all
# the dependencies.
load("@aspect_rules_jest//jest:dependencies.bzl", "rules_jest_dependencies")

rules_jest_dependencies()
