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
          <h2 className="text-h4">{field.title.toUpperCase()}</h2>
          <ul>
            {field.subFields.map((item) => (
              <li key={item.title}>
                <h2 className={styles.subFieldTitle}>
                  <Link href={`/top-science-books/${toSlug(item.title)}`} className="text-center text-h5 text-xl font-bold">
                    {item.title}
                  </Link>
                </h2>
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
