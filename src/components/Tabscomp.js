import React from "react";
import { useEffect, useState } from "react";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
import { getCricketMatches } from "../service/cric-api";
import Score from "./Score";

function Tabscomp() {
  const [value, setValue] = useState(0);
  const [series, setSeries] = useState([]);

  useEffect(() => {
    getCricketMatches()
      .then((data) => {
        setSeries(data.series.live);
        console.log(data.series.live);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e, value) => {
    setValue(value);
  };

  function TabPanel(props) {
    return (
      <Box>
        {props.value === props.index && (
          <Box>
            <Typography>{props.children}</Typography>
          </Box>
        )}
      </Box>
    );
  }
  // console.log(series[0]["series_type"]);
  // console.log(series[0]["series_type "])

  function getData(type) {
    return series.map((match) => {
      return (
        <>
          {match["series_type "] === type ? (
            <Box alignItems="center" display="flex" justifyContent="center">
              <Score match={match} key={match.series_id} />{" "}
            </Box>
          ) : (
            ""
          )}
        </>
      );
    });
  }

  return (
    <>
      <Tabs value={value} onChange={handleChange} indicatorColor="primary">
        <Tab style={{ color: "white" }} label="T20" />
        <Tab style={{ color: "white" }} label="ODI / TESTS" />
        <Tab style={{ color: "white" }} label="Domestic" />
      </Tabs>
      <TabPanel index={0} value={value}>
        {getData("T20")}
      </TabPanel>
      <TabPanel index={1} value={value}>
        {getData("ODI")}
      </TabPanel>
      <TabPanel index={2} value={value}>
        {getData("3")}
      </TabPanel>
    </>
  );
}

export default Tabscomp;
