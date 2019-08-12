# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- SFX-248: Added a number of event names and interfaces used by SF-X.
  - Event name constants:
    - `AUTOCOMPLETE_ERROR`
    - `AUTOCOMPLETE_REQUEST`
    - `AUTOCOMPLETE_RESPONSE`
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
    - `Product`
    - `ProductVariant`
    - `ProductVariants`
    - `SaytHidePayload`
    - `SaytShowPayload`
    - `SearchErrorPayload`
    - `SearchRequestPayload`
    - `SearchResponsePayload`
    - `SearchboxClearedPayload`
    - `SearchboxClickPayload`
    - `SearchboxInputPayload`
    - `UpdateSearchTermPayload`