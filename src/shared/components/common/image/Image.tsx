import React, { useMemo } from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type ImageNode = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
  publicURL: string;
  extension: string;
  relativePath: string;
};

const Image = ({
  src,
  width,
  height,
  style,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
        edges {
          node {
            relativePath
            extension
            publicURL
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                width: 1000 # 기본 최대 width 설정
              )
            }
          }
        }
      }
    }
  `);

  const match = useMemo(
    () =>
      data.images.edges.find(
        ({ node }: { node: ImageNode }) => src === node.relativePath
      ),
    [data, src]
  );

  if (!match) return null;

  const {
    node: { childImageSharp, publicURL, extension },
  }: { node: ImageNode } = match;

  if (extension === 'svg' || !childImageSharp) {
    return (
      <img
        src={publicURL}
        alt={rest.alt}
        width={width}
        height={height}
        style={style}
        {...(rest as Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad'>)}
      />
    );
  }

  return (
    <GatsbyImage
      image={childImageSharp.gatsbyImageData}
      alt={rest.alt || ''}
      style={{ width, height, ...style }}
      {...(rest as Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'onLoad'>)}
    />
  );
};

export default Image;
