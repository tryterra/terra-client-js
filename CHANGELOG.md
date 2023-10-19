# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 1.4.2 - 2023-10-19

## 1.4.1 - 2023-10-12

## 1.4.0 - 2023-07-24
### Changed
- Add `retry_if_rate_limited` as a query parameter to the getter functions

## 1.3.3 - 2023-05-25
### Changed
- Updated data models
- Add `with_samples` as a query parameter to the getter functions

## 1.3.2 - 2023-04-11
### Changed
- Updated data models
- Allows userinfo to be queried by reference id

## 1.3.0 - 2023-01-12
### Added
- Changelog
- CI for publishing

### Changed
- Function inputs to an interface where suitable to avoid inputting `undefined` parameters

### Fixed
- Error handling in the request handler
