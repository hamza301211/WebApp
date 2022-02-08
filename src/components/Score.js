import React, { Component } from "react";

import { Card, CardContent, Typography } from "@material-ui/core";
import Logo from "../images/icc.png";

class Score extends Component {
  render() {
    return (
      <Card style={{ marginTop: "20px", width: "700px" }}>
        <CardContent>
          <Typography>{this.props.match["series_name"]}</Typography>
          <img style={{ width: 100, height: 100 }} src={Logo} alt="cric" />
          <Typography>{this.props.match["dates "]}</Typography>
        </CardContent>
      </Card>
    );
  }
}

export default Score;
