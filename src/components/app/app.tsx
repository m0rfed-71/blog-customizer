import { defaultArticleState } from '@/constants/articleProps.ts';
import { clsx } from 'clsx';
import { useState } from 'react';

import { ArticleParamsForm } from '@components/article-params-form';

import { Article } from '../article/Article';

import type { ArticleStateType } from '@/constants/articleProps.ts';
import type { CSSProperties } from 'react';

import styles from './app.module.scss';

export const App = (): React.JSX.Element => {
  const [pageState, setPageState] = useState<ArticleStateType>(defaultArticleState);

  return (
    <main
      className={clsx(styles.main)}
      style={
        {
          '--font-family': pageState.fontFamilyOption.value,
          '--font-size': pageState.fontSizeOption.value,
          '--font-color': pageState.fontColor.value,
          '--container-width': pageState.contentWidth.value,
          '--bg-color': pageState.backgroundColor.value,
        } as CSSProperties
      }
    >
      <ArticleParamsForm onApply={setPageState} />
      <Article />
    </main>
  );
};
