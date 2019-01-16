import React from "react";
import { ActivityIndicator } from "antd-mobile";

export default () => (
  <div style={{ paddingTop: 100, textAlign: "center" }}>
    <ActivityIndicator size="large" />
    <span style={{ marginTop: 8 }}>Loading...</span>
  </div>
);
