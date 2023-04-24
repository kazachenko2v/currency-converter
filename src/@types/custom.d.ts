import React from "react";

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.png" {
  const value: any;
  export default value;
}

declare module "*.jpg" {
  const value: any;
  export default value;
}
