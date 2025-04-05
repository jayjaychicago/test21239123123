# Changelog

## 0.1.0-alpha.1 (2025-04-05)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/jayjaychicago/test21239123123/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#19](https://github.com/jayjaychicago/test21239123123/issues/19)) ([1709382](https://github.com/jayjaychicago/test21239123123/commit/1709382167152ff189134f379ef52589bf9e9671))
* **client:** accept RFC6838 JSON content types ([#20](https://github.com/jayjaychicago/test21239123123/issues/20)) ([caa5f38](https://github.com/jayjaychicago/test21239123123/commit/caa5f38f11ee56e35469197fb9334a879096cd85))
* **client:** send `X-Stainless-Timeout` header ([#4](https://github.com/jayjaychicago/test21239123123/issues/4)) ([c1f18e9](https://github.com/jayjaychicago/test21239123123/commit/c1f18e9c7b97eb74d2d250cdaa8fb6d9074aca6c))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#29](https://github.com/jayjaychicago/test21239123123/issues/29)) ([b4ac61d](https://github.com/jayjaychicago/test21239123123/commit/b4ac61d591ea3681a77b6b544e18da986fc5cb10))
* **client:** fix export map for index exports, accept BunFile ([#9](https://github.com/jayjaychicago/test21239123123/issues/9)) ([1d15d53](https://github.com/jayjaychicago/test21239123123/commit/1d15d53264b3c2686970bcf6e385247a3bf5dea5))
* **client:** fix TypeError with undefined File ([#14](https://github.com/jayjaychicago/test21239123123/issues/14)) ([844125a](https://github.com/jayjaychicago/test21239123123/commit/844125aa8a9b88f27ca7dd8186da5efca9b928f7))
* **client:** send `X-Stainless-Timeout` in seconds ([#27](https://github.com/jayjaychicago/test21239123123/issues/27)) ([a78d8f6](https://github.com/jayjaychicago/test21239123123/commit/a78d8f6a5f086e05bb5281303e9a901fb8f91896))
* **internal:** add mts file + crypto shim types ([#22](https://github.com/jayjaychicago/test21239123123/issues/22)) ([51c6e3f](https://github.com/jayjaychicago/test21239123123/commit/51c6e3f7f346963f9096a6b67a9c6ce7754ad980))
* **internal:** clean up undefined File test ([#15](https://github.com/jayjaychicago/test21239123123/issues/15)) ([bde79d7](https://github.com/jayjaychicago/test21239123123/commit/bde79d756ba8159470262f0606222a9050efcf60))
* **mcp:** remove unused tools.ts ([#30](https://github.com/jayjaychicago/test21239123123/issues/30)) ([fddd106](https://github.com/jayjaychicago/test21239123123/commit/fddd106ab6f6f969f05c19f2349b82a9b4e8a9f0))
* **tests:** manually reset node:buffer File ([#16](https://github.com/jayjaychicago/test21239123123/issues/16)) ([4e97a09](https://github.com/jayjaychicago/test21239123123/commit/4e97a09b1c13c40a8f79f9f1af94fba0ed4da4ee))


### Chores

* **client:** move misc public files to new `core/` directory, deprecate old paths ([#26](https://github.com/jayjaychicago/test21239123123/issues/26)) ([de07d6a](https://github.com/jayjaychicago/test21239123123/commit/de07d6ae0dfce1d1250a3de5569a95d945e26007))
* **client:** only accept standard types for file uploads ([#11](https://github.com/jayjaychicago/test21239123123/issues/11)) ([ca303c2](https://github.com/jayjaychicago/test21239123123/commit/ca303c2e10addebd9fccbcf212e9e5a86a1786f3))
* **docs:** improve docs for withResponse/asResponse ([#18](https://github.com/jayjaychicago/test21239123123/issues/18)) ([adf5d4b](https://github.com/jayjaychicago/test21239123123/commit/adf5d4b54ff821f054a3d8c80fb4c3b8a500e16f))
* **exports:** cleaner resource index imports ([#24](https://github.com/jayjaychicago/test21239123123/issues/24)) ([f962fab](https://github.com/jayjaychicago/test21239123123/commit/f962fab315983a2c9973590e136b6fce01e52a5c))
* **exports:** stop using path fallbacks ([#25](https://github.com/jayjaychicago/test21239123123/issues/25)) ([b9ada91](https://github.com/jayjaychicago/test21239123123/commit/b9ada916e418add90064eebcae200e727ce547b6))
* go live ([#1](https://github.com/jayjaychicago/test21239123123/issues/1)) ([32bb1c6](https://github.com/jayjaychicago/test21239123123/commit/32bb1c6354991ca1826acea65e5e30db18984dfa))
* **internal:** add aliases for Record and Array ([#28](https://github.com/jayjaychicago/test21239123123/issues/28)) ([8b76990](https://github.com/jayjaychicago/test21239123123/commit/8b769901b5cbf683e66cdabc6119f2a9d9f4d673))
* **internal:** codegen related update ([#10](https://github.com/jayjaychicago/test21239123123/issues/10)) ([2ff824e](https://github.com/jayjaychicago/test21239123123/commit/2ff824ead4d8e47a0cdb2802fdef2a0c67159bfc))
* **internal:** codegen related update ([#5](https://github.com/jayjaychicago/test21239123123/issues/5)) ([6fc4c0e](https://github.com/jayjaychicago/test21239123123/commit/6fc4c0e7ee1f573e8161f285dc4f6fd7d012728d))
* **internal:** constrain synckit dev dependency ([#13](https://github.com/jayjaychicago/test21239123123/issues/13)) ([3ca0c5a](https://github.com/jayjaychicago/test21239123123/commit/3ca0c5afcfe7c2e0ebf6a29a73d36e07367fb103))
* **internal:** fix tests failing on node v18 ([#12](https://github.com/jayjaychicago/test21239123123/issues/12)) ([15e484c](https://github.com/jayjaychicago/test21239123123/commit/15e484cfa06451d7a3c9c270436b4fef12f6a430))
* **internal:** migrate to eslint v9 ([#7](https://github.com/jayjaychicago/test21239123123/issues/7)) ([be3db8a](https://github.com/jayjaychicago/test21239123123/commit/be3db8a244db5c13fcea5a6bd44ecc8d343ec4b4))
* **internal:** minor client file refactoring ([#23](https://github.com/jayjaychicago/test21239123123/issues/23)) ([e7a5fa6](https://github.com/jayjaychicago/test21239123123/commit/e7a5fa6efc3d3ccbd06423c15cfb297853b12d9c))
* **internal:** remove extra empty newlines ([#21](https://github.com/jayjaychicago/test21239123123/issues/21)) ([28e8f2c](https://github.com/jayjaychicago/test21239123123/commit/28e8f2cbd0abd0696a9bdf3a1d6114036acfcbb4))
* **internal:** remove unused `isRequestOptions()` function ([#3](https://github.com/jayjaychicago/test21239123123/issues/3)) ([44c9d4a](https://github.com/jayjaychicago/test21239123123/commit/44c9d4a826a98046f1d0c18db6d66c6139060d4a))
* **internal:** remove unused method ([#6](https://github.com/jayjaychicago/test21239123123/issues/6)) ([a40f9c7](https://github.com/jayjaychicago/test21239123123/commit/a40f9c7cd993e37b4c05d1fa1d6fc44d4391d3fa))
* **internal:** update eslint config ([#8](https://github.com/jayjaychicago/test21239123123/issues/8)) ([d3b8a20](https://github.com/jayjaychicago/test21239123123/commit/d3b8a208435ee9116296a24141b8e86c11d4c8da))
* **types:** improved go to definition on fetchOptions ([#17](https://github.com/jayjaychicago/test21239123123/issues/17)) ([5419031](https://github.com/jayjaychicago/test21239123123/commit/54190314ff238c39834647ce5d6d1898cb440866))
