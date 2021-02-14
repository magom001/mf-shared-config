import React, { FC } from "react";

interface DocConsummerProps {
  links: string[];
}
const DocConsummer: FC<DocConsummerProps> = ({ links }) => {
  return <ul>{links && links.map((link) => <li key={link}>{link}</li>)}</ul>;
};

export default DocConsummer;
