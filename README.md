# generator-jhipster-mergeBP
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> JHipster blueprint, Sample blueprint to merge my app with a jHipster one

# Introduction

This is a [JHipster](http://jhipster.github.io/) blueprint.
The goal is to have a plan that can create a new application by merging both our files and those of jHipster.

Don't be shy, follow me [@avdev4j](https://twitter.com/avdev4j) 

# Prerequisites

As this is a [JHipster](http://jhipster.github.io/) blueprint, we expect you have JHipster and its related tools already installed:

- [Installing JHipster](https://jhipster.github.io/installation.html)

# Installation

## With Yarn

To install this blueprint:

```bash
yarn global add generator-jhipster-mergeBP
```

To update this blueprint:

```bash
yarn global upgrade generator-jhipster-mergeBP
```

## With NPM

To install this blueprint:

```bash
npm install -g generator-jhipster-mergeBP
```

To update this blueprint:

```bash
npm update -g generator-jhipster-mergeBP
```

# Usage

To use this blueprint, run the below command

```bash
jhipster --blueprint mergeBP
```

## During development of this blueprint

1. On blueprint folder `yarn link`
2. On blueprint folder `yarn link generator-jhipster`
2. On the project created `yarn link generator-jhipster`
4. On the project created `yarn link generator-jhipster-mergeBP`


# License

MIT © [Anthony Viard](https://twitter.com/avdev4j)


[npm-image]: https://img.shields.io/npm/v/generator-jhipster-mergeBP.svg
[npm-url]: https://npmjs.org/package/generator-jhipster-mergeBP
[travis-image]: https://travis-ci.org/avdev4j/generator-jhipster-mergeBP.svg?branch=master
[travis-url]: https://travis-ci.org/avdev4j/generator-jhipster-mergeBP
[daviddm-image]: https://david-dm.org/avdev4j/generator-jhipster-mergeBP.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/avdev4j/generator-jhipster-mergeBP
