import React from "react";
import { Repo } from "../../@types/Repo";
import { truncate } from "../../utils";
import { BsBook } from "react-icons/bs";
import { FaCodeBranch, FaDownload, FaStar } from "react-icons/fa";
import { VscCommentDiscussion, VscIssues, VscProject } from "react-icons/vsc";
import { TbPageBreak } from "react-icons/tb";

import styles from "./repoCard.module.css";

interface RepoCardProps {
  content: Repo;
  handler: (repo: Repo) => void;
}

export const RepoCard: React.FC<RepoCardProps> = ({ content, handler }) => {
  return (
    <div className={styles.container} onClick={() => handler(content)}>
      <div className={styles.header}>
        <img
          src={content.owner.avatar_url}
          alt="avatar"
          className={styles.avatar}
        />

        <div className={styles.headerInfo}>
          <h2 className={styles.name}>{content.name}</h2>
          <h3 className={styles.fullName}>{content.full_name}</h3>
        </div>
      </div>

      <div className={styles.content}>
        <p className={styles.description}>
          {truncate(content.description, 72)}
        </p>

        <div className={styles.stats}>
          <div className={styles.statsItem}>
            ???
            <FaStar className={styles.statsIcon} />
          </div>
          <div className={styles.statsItem}>
            {content.stargazers_count}
            <FaCodeBranch className={styles.statsIcon} />
          </div>
        </div>

        <ul className={styles.booleans}>
          <li>
            <TbPageBreak
              title="Has Pages"
              className={
                content.has_pages
                  ? styles.activeBoolean
                  : styles.disabledBoolean
              }
            />
          </li>
          <li>
            <VscIssues
              title="Has Issues"
              className={
                content.has_issues
                  ? styles.activeBoolean
                  : styles.disabledBoolean
              }
            />
          </li>
          <li>
            <VscCommentDiscussion
              title="Has Discussions"
              className={
                content.has_discussions
                  ? styles.activeBoolean
                  : styles.disabledBoolean
              }
            />
          </li>
          <li>
            <BsBook
              title="Has Wiki"
              className={
                content.has_wiki ? styles.activeBoolean : styles.disabledBoolean
              }
            />
          </li>
          <li>
            <FaDownload
              title="Has Downloads"
              className={
                content.has_downloads
                  ? styles.activeBoolean
                  : styles.disabledBoolean
              }
            />
          </li>
          <li>
            <VscProject
              title="Has Projects"
              className={
                content.has_projects
                  ? styles.activeBoolean
                  : styles.disabledBoolean
              }
            />
          </li>
        </ul>

        <ul className={styles.topics}>
          {content.topics.map((topic) => (
            <li className={styles.topic} key={topic}>
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
