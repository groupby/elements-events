# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] [minor]
### Changed
- SFX-249: Create first pass of tracker service plugin for Search
  - Added `origin` to:
    - `SaytProductsRequestPayload`
    - `SearchRequestPayload`
    - `UpdateSearchTermPayload`

### Added
- SFX-249: Create first pass of tracker service plugin for Search
  - Event name constants:
    - `BEACON_SEARCH`
  - Event payload interfaces:
    - `BeaconSearchPayload`
  - Dependencies:
    - `gb-tracker-client`

## [0.1.0] - 2019-11-28
### Added
- SFX-248: Added a number of event names and interfaces used by GB Elements.
  - Event name constants:
    - `AUTOCOMPLETE_ERROR`
    - `AUTOCOMPLETE_REQUEST`
    - `AUTOCOMPLETE_RESPONSE`
    - `CACHE_ERROR`
    - `CACHE_REQUEST`
    - `CACHE_RESPONSE_PREFIX`
    - `SAYT_HIDE`
    - `SAYT_SHOW`
    - `SEARCHBOX_CLEARED`
    - `SEARCHBOX_CLICK`
    - `SEARCHBOX_INPUT`
    - `SEARCH_ERROR`
    - `SEARCH_REQUEST`
    - `SEARCH_RESPONSE`
    - `UPDATE_SEARCH_TERM`
  - Event payload interfaces:
    - `AutocompleteErrorPayload`
    - `AutocompleteRequestPayload`
    - `AutocompleteResponsePayload`
    - `AutocompleteResultGroup`
    - `AutocompleteSearchTermItem`
    - `CacheErrorPayload`
    - `CacheRequestPayload`
    - `CacheResponsePayload`
    - `Product`
    - `ProductVariant`
    - `ProductVariants`
    - `SaytHidePayload`
    - `SaytShowPayload`
    - `SaytVisibilityPayload`
    - `SearchErrorPayload`
    - `SearchRequestPayload`
    - `SearchResponsePayload`
    - `SearchboxClearedPayload`
    - `SearchboxClickPayload`
    - `SearchboxInputPayload`
    - `UpdateSearchTermPayload`
