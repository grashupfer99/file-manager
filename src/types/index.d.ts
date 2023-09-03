interface IFile {
  /** File's KEY */
  key: string;
  /** File's thumbnail URL */
  thumbnailUrl: string;
  /**  File's name  */
  name: string;
  /** File's size  */
  size: number;
}

interface ILink {
  /** Date when the link was created */
  created_at: number;
  /** Link's KEY */
  key: string | undefined;
  /** Link's validity period */
  expires_at: number;
  /** Number of times the link has been downloaded */
  download_count: number;
  /** Number of files in the link */
  count: number;
  /**  File size of the link */
  size: number;
  /** Name of the first file in the link */
  summary: string;
  /**  Thumbnail URL of the link */
  thumbnailUrl: string;
  /** List of link's files */
  files: IFile[];
  sent: {
    /** Email subject when sharing the link */
    subject: string;
    /** Email content when sharing the link */
    content: string;
    /** List of emails the link was shared with */
    emails: string[];
  };
}
