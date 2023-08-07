/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import type {Props} from '@theme/Logo';

import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from "./styles.module.scss"
import clsx from 'clsx';

const Logo = (props: Props): JSX.Element => {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo = {src: ''}},
  } = useThemeConfig();

  const {imageClassName, titleClassName, ...propsRest} = props;
  const logoLink = useBaseUrl(logo.href || '/');
  // const sources = {
  //   light: useBaseUrl(logo.src),
  //   dark: useBaseUrl(logo.srcDark || logo.src),
  // };

  return (
    <Link
      className={styles.wrapper}
      to={logoLink}
      {...propsRest}
      {...(logo.target && {target: logo.target})}>

        {/* Disabled config image for explict Logo SVG */}

      {/* {logo.src && (
        <ThemedImage
          className={imageClassName}
          sources={sources}
          alt={logo.alt || navbarTitle || title}
        />
      )} */}
      <ThemedImage sources={{
          light: useBaseUrl('/img/fetcch-logo.svg'),
          dark: useBaseUrl('/img/fetcch-logo-white.svg'),
        }} className={clsx(imageClassName)} />
      {navbarTitle != null && <span className={clsx(titleClassName, styles.logoTitle)}>{navbarTitle}</span>}
    </Link>
  );
};

export default Logo;
