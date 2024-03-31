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
          <h3 className={styles.branchTitle}>{field.title}</h3>
          <ul>
            {field.subFields.map((item) => (
              <li key={item.title}>
                <h4 className={styles.subFieldTitle}>
                  <Link href={`/top-science-books/${toSlug(item.title)}`} className={styles.ScienceFieldsMenu__linkItem}>
                    {item.title}
                  </Link>
                </h4>
                <ul>
                  {item.topics.map((topic) => (
                    <li key={topic} >
                      <Link href={`/top-science-books/${toSlug(item.title)}/${toSlug(topic)}`} >
                        <p className={styles.topicTitle}>{topic}</p>
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
