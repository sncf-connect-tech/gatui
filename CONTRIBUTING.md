<!-- toc -->

- [Introduction](#introduction)
- [Suggesting new features](#suggesting-new-features)
- [Reporting a bug](#reporting-a-bug)
- [Code](#code)
  * [Development environment](#development-environment)
  * [pre-commit hooks](#pre-commit-hooks)
  * [Style guide](#style-guide)
  * [Continuous integration](#continuous-integration)
  * [Code reviews](#code-reviews)
- [Credits](#credits)

<!-- tocstop -->

# Introduction

First off, thank you for considering contributing to Gatui !

There are many ways you can help us in this project:
- first, test it and tell us what you think about it !
- help us by **communicating** around the project: present it to your coworkers, and maybe use it in your organization !
- suggest **new features** and/or improvements to existing ones: get a look at the "[suggesting new features](#Suggesting-new-features)" section below detailing how to proceed
- tell us when you face **bugs** by creating a [bug report issue](#reporting-a-bug)
- **contribute some code** to the project, by making a [pull request](#code)

Overall, don't hesitate to get in touch with us throught this project [issues](https://github.com/voyages-sncf-technologies/Gatui/issues) for any request,
even for simple questions.

We use [GitHub projects](https://github.com/voyages-sncf-technologies/Gatui/projects/1) as a simple workflow to triage the issues.

# Suggesting new features

First off, make sure it hasn't been suggested yet by making a quick [issues search](https://github.com/voyages-sncf-technologies/Gatui/issues).

If not, simply open an issue including the following information:
- a short description of what you have in mind
- **why** you need this feature : this will help us to understand your need and maybe suggest an existing solution or an alternative approach
- as much explanatory documentation as you are willing to add:
  * a simple diagram is often very helpful
  * a [user story](https://en.wikipedia.org/wiki/User_story) or a user-centered usage scenario
  * in case of REST API changes, a [Swagger](https://swagger.io) spec
  * in case of front end features, try to include some UI wireframe / mockup
- finally, whether you are willing to work on a PR to implement it


# Reporting a bug

First off, make sure it hasn't been reported before by making a quick [issues search](https://github.com/voyages-sncf-technologies/Gatui/issues).

If not, please open an issue including the following information:
- the current version of V.Board you are using
- some **detailed steps to reproduce it**
- if this bug seems related to the front end code, please include a screenshot and the [JS console errors](https://webmasters.stackexchange.com/a/77337) whenever possible
- if this bug seems related to the back end code, please include the Java logs and stack trace whenever possible


# Code

The overall process to contribute code to the project is:
1. Make sure there is an issue detailing the feature you want to implement or bug you want to fix.
Ideally, indicate in this issue that you intend to work on it to begin with.
2. [Fork this repository](https://help.github.com/articles/fork-a-repo/) under your GitHub username,
and install your [development environment](#development-environment).
3. Write some code !
4. Commit and push your changes on your forked repo, ideally on a specific branch and not on `master` (to allow you to work on different issues in parallel).
During this step, the [pre-commit hooks](#pre-commit-hooks) should be executed to detect some issues before you commit.
5. [Create a pull request](https://help.github.com/articles/creating-a-pull-request/), and make sure the [Travis CI](#continuous-integration) build passes.
Then mention in the related issue that you created this PR, and ask for a [code review](#code-review).
6. It is very likely you will be asked to make some minor changes: simply add commits in your branch on your forked repo,
they will be automatically taken into account in the pull request, and then [squashed](https://help.github.com/articles/about-pull-request-merges/#squash-and-merge-your-pull-request-commits) by GitHub when merged.

Once you've fixed all the potential issues, a maintainer of this project will merge your contribution.

That's it !

## Development environment

Gatui maintainers currently use [Visual Studio Code](https://code.visualstudio.com/) and [Neovim](https://neovim.io/) as their IDE, but this is not a requirement.

However you will need:
- NodeJS and `npm`

Moreover, we use Docker to have a convenient way to deploy the full app or launch it locally.
It may suffice if you don't want to install NodeJS for example, but will not be very handy to use to develop.

## pre-commit hooks

In order to execute a number of checks before each commit, this project uses `git` [pre-commit](http://pre-commit.com) hooks.
They are listed in the [.pre-commit-config.yaml](.pre-commit-config.yaml) configuration file
and are executed by [Travis CI](https://travis-ci.org/voyages-sncf-technologies/Gatui).
No PR will be merged unless they the hooks pass.

As much as possible, please try to install them on your development machine.
If you can't or don't want to, you'll have to use the Travis CI build logs to debug issues that may arise with them.

To install them on your development machine, you will need Python, and the `pre-commit` package that can be installed with `pip`.
To configure `git` to run them before each commit, execute the following command:

    pre-commit install

You can also run those hooks manually:

    pre-commit run $hook_name             # execute a single hook on all modified files
    pre-commit run --files $file1 $file2  # execute all hooks on some selected files
    pre-commit run --all-files            # execute all hooks on all files

## Style guide

Currently, on the frontend side, executes `eslint` linter inside of webpack to check
the style.

## Continuous integration

[Travis CI](https://travis-ci.org/voyages-sncf-technologies/Gatui) is configured on this project to build both the backend & frontend components,
on each each commit or pull request, and warn on build / code style / test failures.

## Code reviews

Every pull request must be reviewed by a current maintainer of the project,
and get their approval.

Code reviewers should follow those guidelines:
- [yelp guidelines](https://engineeringblog.yelp.com/2017/11/code-review-guidelines.html)
- [Sebastien Charrier advices](https://www.youtube.com/watch?v=6aQK6GoTbxM)


# Credits

- First off, thanks to all the past [contributors](CONTRIBUTORS.md) !
- Thanks to Github [opensource.guide](https://opensource.guide) for their guidance on how to write this file