import type { BadgeProps } from "antd";
import { StatusMaps } from "./types";

export const badgeMaps: { [K in StatusMaps]: BadgeProps["status"] } = {
  1: "warning",
  2: "success",
  3: "error",
  4: "processing",
};
