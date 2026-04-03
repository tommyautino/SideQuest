# AGENTS.md

## Mission

Build `SideQuest`, a mobile app for high schoolers and college students that fosters community and encourages real-world exploration through a fun daily challenge.

The app should feel:
- social, not lonely
- adventurous, not productivity-heavy
- lightweight and motivating, not preachy
- safe for younger users and respectful of real-world constraints

## Product Direction

The current product concept, based on the repository docs and prototype code, is:
- each user gets a daily challenge or "side quest"
- quests should encourage exploration, social interaction, personal growth, or playful spontaneity
- users can submit proof of completion, likely via photo or video
- completed quests will eventually appear in a social feed
- the product may later include friends, streaks, leaderboards, and local communities such as schools, colleges, or cities

When making product decisions, prefer features that increase:
- community participation
- real-world action
- repeat daily engagement
- safety and appropriateness for teens and young adults

## Repo Reality

This repo currently has two layers:

1. Root prototype
- `app.js` contains a very simple React Native quest generator prototype.
- `README.md` contains the clearest expression of the product vision.

2. Main mobile app
- `mobile/` is the actual Expo / React Native app.
- It uses Expo Router with file-based routing.
- Much of the codebase is still close to the default Expo starter template.

Treat `mobile/` as the primary app unless the user explicitly asks to work on the root prototype.

## Current Architecture

Primary app location:
- `mobile/`

Important files:
- `mobile/package.json`: app scripts and dependencies
- `mobile/app.json`: Expo config
- `mobile/tsconfig.json`: TypeScript strict mode and `@/*` path alias
- `mobile/app/_layout.tsx`: root navigation stack
- `mobile/app/(tabs)/_layout.tsx`: tab navigation
- `mobile/app/(tabs)/index.tsx`: current home screen prototype
- `mobile/app/feed.js`: feed placeholder
- `mobile/app/profile.js`: profile placeholder
- `mobile/components/`: shared UI components from the Expo starter
- `mobile/constants/theme.ts`: shared theme constants

Tech stack:
- Expo
- React Native
- Expo Router
- TypeScript for much of the app
- a small amount of existing JavaScript

## Important Current Mismatches

Be careful: the repo contains scaffold leftovers and a few inconsistencies.

- `mobile/app/(tabs)/index.tsx` has a quest button but does not currently render the selected quest text.
- `mobile/app/(tabs)/explore.tsx` is still Expo starter content and does not match the SideQuest product.
- `mobile/app/(tabs)/_layout.tsx` registers `feed` and `profile` as tab routes, but the corresponding files currently live at `mobile/app/feed.js` and `mobile/app/profile.js`, not inside `mobile/app/(tabs)/`.
- The root `app.js` and the `mobile/` app both represent versions of the same idea, but only `mobile/` matches the intended long-term structure.
- Naming and branding are not fully applied yet in Expo config; `mobile/app.json` still uses generic `mobile` values.

Before building new features, verify whether you are improving the real app structure or accidental starter scaffolding.

## Working Principles

When contributing to this repo:

- prioritize the actual mobile app in `mobile/`
- preserve momentum toward a believable MVP instead of polishing starter-template code
- remove or replace Expo starter content when it creates confusion
- keep UX mobile-first
- favor simple, testable flows over large speculative systems
- keep younger users in mind when writing copy, quest ideas, reward systems, and community features

## MVP Priorities

If scope is unclear, favor this order:

1. Daily quest experience
2. Quest completion / proof flow
3. Social feed of completions
4. Basic profile and streaks
5. Social graph, leaderboards, and local communities

An MVP should likely answer these core questions:
- How does a user get today's quest?
- How do they complete it?
- How do they share it?
- Why do they come back tomorrow?

## UX Guidance

Design for:
- short session lengths
- clear calls to action
- exciting but readable copy
- visual energy without clutter
- strong empty states and onboarding prompts

The app should feel like a challenge-driven social product, not a corporate habit tracker.

Good interaction patterns:
- one clear daily quest card
- obvious completion CTA
- visible streak or progress indicator
- social proof from other users
- quest categories that feel playful and varied

Avoid:
- guilt-heavy language
- unsafe dares
- features that encourage cheating for proof
- dense settings-first experiences

## Safety Constraints

Because the target audience includes high school and college users, do not casually introduce:
- dangerous physical challenges
- illegal or high-risk prompts
- harassment or invasive social mechanics
- location features that expose precise private whereabouts by default
- public sharing flows that ignore moderation or consent risks

If implementing quests or community features, favor guardrails and moderation-friendly design.

## Engineering Guidance

Use these conventions unless the user requests otherwise:

- place real screens under `mobile/app/`
- keep route structure aligned with Expo Router filesystem rules
- prefer TypeScript for new code in `mobile/`
- use the existing `@/*` alias for imports within `mobile/`
- reuse or simplify starter components rather than duplicating them blindly
- keep components focused and easy to iterate on
- avoid introducing heavy state management until the product shape is clearer

For new work:
- create or move tab screens into the correct routed locations
- remove template content once replacement product UI exists
- keep styling consistent with the app's intended brand direction
- favor local mock data first, then introduce backend integration points cleanly

## Recommended Near-Term Cleanup

These are sensible improvements for future agents:

1. Fix tab route structure so `feed` and `profile` live where Expo Router expects.
2. Replace Expo starter screens and copy with SideQuest-specific UI.
3. Unify the quest prototype so the root `app.js` no longer competes with `mobile/`.
4. Rename Expo app metadata from generic `mobile` values to `SideQuest`.
5. Decide whether the codebase should standardize on TypeScript for all app screens.

## Commands

Run commands from `mobile/` unless working on root-level files.

Common commands:
- `npm install`
- `npm run start`
- `npm run android`
- `npm run ios`
- `npm run web`
- `npm run lint`

## Definition of Good Changes

A good change in this repo usually:
- makes the app feel more like SideQuest and less like an Expo starter
- strengthens the daily challenge loop
- reduces confusion in structure or naming
- is easy for the next contributor to extend
- avoids overengineering

## If You Are Picking What To Do Next

Choose work that clarifies product shape.

Best next tasks usually include:
- building the real home screen for the daily quest
- creating a simple quest data model with category and difficulty
- implementing a believable completion flow
- designing a first-pass social feed
- cleaning up navigation so the repo structure matches the app experience

If there is a conflict between keeping starter code and moving toward the actual product, prefer moving toward the product.
