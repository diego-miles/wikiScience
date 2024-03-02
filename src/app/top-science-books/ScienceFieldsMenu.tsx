import React, { FC } from 'react';
import Link from 'next/link';
import styles from './ScienceFieldsMenu.module.css';

interface ScienceFieldsMenuProps {
  data: Wiki.ScienceField[];
}

export const ScienceFieldsMenu: FC<ScienceFieldsMenuProps> = ({ data }) => {
  return (
    <div className={styles.menu}>
      {data.map((field) => (
        <section key={field.title}>
          <h2 className={styles.branchTitle}>{field.title.toUpperCase()}</h2>
          <ul>
            {field.subFields.map((item) => (
              <li key={item.title}>
                <h3 className={styles.subFieldTitle}>
                  <Link href={`/top-science-books/${toSlug(item.title)}`} className={styles.ScienceFieldsMenu__linkItem}>
                    {item.title}
                  </Link>
                </h3>
                <ul>
                  {item.topics.map((topic) => (
                    <li key={topic} className={styles.ScienceFieldsMenu__linkItem}>
                      <Link href={`/top-science-books/${toSlug(item.title)}/${toSlug(topic)}`} >
                        <h4 className={styles.topicTitle}>{topic}</h4>
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

const toSlug = (title: string) => {
  return title.toLowerCase().replace(/\s+/g, '_');
};
