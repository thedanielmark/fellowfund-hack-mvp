import React, { useState, useEffect, useContext } from "react";
import ReactECharts from "echarts-for-react";
import { graphic } from "echarts";
import useMediaQuery from "@/hooks/useMediaQuery";
import GraphWrapper from "@/components/Graphs/GraphWrapper";
import { Error } from "@/components/Error";
import formatCurrency from "@/utils/formatCurrency";
import axios from "axios";

interface DataProps {
  map?: any;
  type?: string;
  name: string;
  data?: number[];
  dataName?: string;
  endpoint?: string;
  color?: string;
  areastyle?: boolean;
}
interface Props {
  title: string;
  id?: string;
  data1: DataProps;
  data2?: DataProps;
  barWidth?: string;
}

export default function TwoPointGraph({
  title,
  id,
  data1,
  data2,
  barWidth,
}: Props) {
  const currentTheme = "dark";

  const lightColor = "rgb(213, 60, 94)";
  const darkColor = "#d1d5db";

  // --- Duration tab state ---
  const [duration, setDuration] = useState([
    { value: "24h", selected: false },
    { value: "7d", selected: false },
    { value: "30d", selected: true },
    { value: "3m", selected: false },
    { value: "1y", selected: false },
    { value: "All", selected: false },
  ]);
  const currentDay = duration
    .map((day) => (day.selected ? day.value : ""))
    .join("");

  // --- 24h duration tab state ---
  const [twenty4duration, setTwenty4Duration] = useState([
    { value: "24h", selected: true },
    { value: "12h", selected: false },
    { value: "6h", selected: false },
    { value: "1h", selected: false },
    { value: "30m", selected: false },
    { value: "15m", selected: false },
    { value: "5m", selected: false },
    { value: "1m", selected: false },
  ]);

  // --- Fetching data ---
  const [initialLoading, setInitialLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>([]);
  const [total, setTotal] = useState<any>();
  const [error, setError] = useState(false);

  async function fetchData() {
    setError(false);
    setLoading(true);
    try {
      const firstData = await axios.get(
        `${process.env.NEXT_PUBLIC_API_ROUTE}${data1.endpoint}?time=${
          currentDay === "All" ? "" : currentDay
        }`
      );
      if (data2?.endpoint) {
        const secondData = await axios.get(
          `${process.env.NEXT_PUBLIC_API_ROUTE}${data2.endpoint}?time=${
            currentDay === "All" ? "" : currentDay
          }`
        );
        setData([firstData.data.data, secondData.data.data]);
        setTotal([firstData.data.total, secondData.data.total]);
      } else {
        setData([firstData.data.data, null]);
        setTotal([firstData.data.total, null]);
      }
    } catch (e) {
      setError(true);
    }
    setInitialLoading(false);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDay]);

  // --- Graph media queies ---
  const isMobile = useMediaQuery("(max-width: 425px)");
  const isTablet = useMediaQuery("(max-width: 768px)");

  function formatDate(time: string) {
    const date = new Date(time);
    const month = date.toLocaleString("default", { month: "short" });
    const day = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${month} ${day}, ${year}, ${hour}:${minute}`;
  }

  //--- XAxis formatter ---
  function xAxisFormatter(value: string) {
    if (currentDay === "24h") {
      return value.split(",")[2];
    } else {
      return value.split(",")[0];
    }
  }
  function calInterval() {
    if (isMobile || isTablet) {
      return null;
    }
    if (currentDay === "24h") {
      return 1;
    } else if (currentDay === "7d") {
      return 12;
    } else {
      return null;
    }
  }

  // --- Area chart styling ---
  const areastyling = (d: any) => {
    return {
      color: new graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: 0,
          color:
            d[d.length - 1] > d[d.length - 2]
              ? "rgb(131, 39, 149)"
              : "rgba(234, 88, 12, 1)",
        },
        {
          offset: 1,
          color: "rgba(0, 0, 0, 0)",
        },
      ]),
    };
  };

  const xAxisData =
    !loading && data[0]?.map((item: any) => formatDate(item._id));
  const noData = !loading && data[0]?.length === 0;

  const currencyName = [
    "Market Cap",
    "Volume",
    "Floor Price",
    "Average Price",
    "Maximum Price",
    "Minimum Price",
  ];

  function formatName() {
    if (title === "Liquidity") {
      return `(%)`;
    } else if (currencyName.includes(title)) {
      return ` (ETH)`;
    }
    return "";
  }

  // --- Output ---
  if (initialLoading) {
    // return <GraphLoader />;
    return "Loading";
  }
  return (
    <div id={id}>
      <GraphWrapper
        title={title}
        duration={duration}
        setDuration={setDuration}
        twenty4duration={twenty4duration}
        setTwenty4Duration={setTwenty4Duration}
      >
        {loading ? (
          //   <GraphShimmer />
          "Loading Shimmer"
        ) : error ? (
          <Error message="There was an error loading this Graph" />
        ) : noData ? (
          <Error message="No data to display" />
        ) : (
          <ReactECharts
            style={{
              height: "100%",
              width: "100%",
            }}
            option={{
              dataZoom: [
                {
                  type: "inside",
                },
                {
                  type: "slider",
                  brushSelect: false,
                  xAxisIndex: 0,
                  show: "false",
                  filterMode: "none",
                  handleSize: "100%",
                  fillerColor: "rgb(213, 60, 94)",
                  backgroundColor: "rgba(47,69,84,0)",
                  height: "10",
                  borderColor: "#00000000",
                  brushStyle: {
                    borderColor: "#f5d0fe",
                    shadowColor: "#f5d0fe",
                  },
                  dataBackground: {
                    lineStyle: { color: "#f5d0fe" },
                    areaStyle: { color: "#f5d0fe" },
                    areaColor: "#f5d0fe",
                  },
                  bottom: "7",
                },
                {
                  type: "slider",
                  brushSelect: false,
                  yAxisIndex: 0,
                  handleSize: "100%",
                  fillerColor: "rgb(213, 60, 94)",
                  backgroundColor: "rgba(47,69,84,0)",
                  width: "0",
                  borderColor: "#fff",
                  brushStyle: {
                    borderColor: "#f5d0fe",
                    shadowColor: "#f5d0fe",
                  },
                  dataBackground: {
                    lineStyle: { color: "#f5d0fe" },
                    areaStyle: { color: "#f5d0fe" },
                    areaColor: "#f5d0fe",
                  },
                  filterMode: "none",
                },
              ],
              grid: {
                left: isMobile ? "95%" : "6%",
                right: isMobile ? "92%" : "6%",
                top: isMobile ? "92%" : "90%",
                bottom: isMobile ? "75%" : "80%",
                show: true,
                borderWidth: 0,
                containLabel: true,
              },
              tooltip: {
                trigger: "axis",
                formatter: function (params: any) {
                  if (params[0] && params[1]) {
                    return (
                      xAxisData[params[0].dataIndex] +
                      "(UTC)" +
                      "<br/>" +
                      params[0].marker +
                      params[0].seriesName +
                      "&nbsp" +
                      params[0].data +
                      `${formatName()}` +
                      "<br/>" +
                      params[1].marker +
                      params[1].seriesName +
                      "&nbsp" +
                      params[1].data +
                      `${formatName()}`
                    );
                  } else if (params[0]) {
                    return (
                      xAxisData[params[0].dataIndex] +
                      "(UTC)" +
                      "<br/>" +
                      params[0].marker +
                      params[0].seriesName +
                      "&nbsp" +
                      params[0].data +
                      `${formatName()}` +
                      "<br/>"
                    );
                  } else if (params[1]) {
                    return (
                      params[1].marker +
                      params[1].seriesName +
                      "&nbsp" +
                      params[1].data +
                      `${formatName()}`
                    );
                  }
                },
                axisPointer: {
                  type: "line",
                  link: { xAxisIndex: "all" },
                  crossStyle: {
                    color: currentTheme === "dark" ? darkColor : lightColor,
                  },
                },
              },
              legend: {
                left: "1%",
                itemGap: isMobile ? 8 : 25,
                inactiveColor: currentTheme === "dark" ? lightColor : darkColor,
                formatter: (name: string) => {
                  if (name === `${data1.name}${formatName()}`) {
                    return `${name}`;
                  } else if (name === `${data2?.name}${formatName()}`) {
                    return `${name} \n ${total[0]}`;
                  }
                },
                textStyle: {
                  lineHeight: 17,
                },
                data: [
                  {
                    name: `${data1.name}${formatName()}`,
                    icon: "circle",
                    textStyle: {
                      color: currentTheme === "dark" ? "#d1d5db" : "#232323",
                      fontSize: "15px",
                    },
                  },
                  data2 && {
                    name: `${data2.name}${formatName()}`,
                    icon: "circle",
                    textStyle: {
                      color: currentTheme === "dark" ? "#d1d5db" : "#232323",
                      fontSize: "15px",
                    },
                  },
                ],
              },
              xAxis: {
                type: "category",
                data: data[0].map((item: any) =>
                  xAxisFormatter(formatDate(item._id))
                ),
                axisLabel: {
                  show: true,
                  color: currentTheme === "dark" ? "#9ca3af" : "#000",
                  interval: calInterval(),
                },
                axisLine: { onZero: true, show: false },
                axisTick: {
                  alignWithLabel: true,
                  show: false,
                },
                orient: "horizontal",
                name: "UTC",
                nameLocation: "start",
                nameGap: isTablet ? 25 : 25,
                nameTextStyle: {
                  color: currentTheme === "dark" ? "#9ca3af" : "#000",
                  fontWeight: "normal",
                },
              },
              yAxis: [
                {
                  type: "value",
                  boundaryGap: [0, "100%"],
                  alignTicks: true,
                  inverse:
                    data1.dataName === "proposalsCumulative" ? false : true, // Invert the axis
                  axisLine: {
                    show: false,
                  },
                  axisLabel: {
                    formatter: (value: number) => {
                      return formatCurrency(value);
                    },
                    color: currentTheme === "dark" ? "#9ca3af" : "#000",
                  },
                  splitLine: {
                    show: true,
                    interval: 0,
                    lineStyle: {
                      type: "dashed",
                      color: currentTheme === "dark" ? "#6b7280" : "#aaa",
                    },
                  },
                  orient: "vertical",
                  name: `${data1.name}${formatName()}`,
                  nameLocation: "middle",
                  nameGap: isTablet ? 30 : 40,
                  nameTextStyle: {
                    color: currentTheme === "dark" ? "#9ca3af" : "#000",
                    fontWeight: "normal",
                  },
                },
                data2 && {
                  type: "value",
                  alignTicks: true,
                  inverse: data2.dataName === "votesCumulative" ? true : false, // Invert the second Y-axis as well
                  axisLine: {
                    show: false,
                  },
                  axisLabel: {
                    formatter: (value: number) => {
                      return formatCurrency(value);
                    },
                    color: currentTheme === "dark" ? "#9ca3af" : "#000",
                  },
                  splitLine: {
                    show: true,
                    interval: 0,
                    lineStyle: {
                      type: "dashed",
                      color: currentTheme === "dark" ? "#444" : "#aaa",
                    },
                  },
                  orient: "vertical",
                  name: `${data2.name}${formatName()}`,
                  nameLocation: "middle",
                  nameRotate: -90,
                  nameGap: isTablet ? 30 : 40,
                  nameTextStyle: {
                    color: currentTheme === "dark" ? "#9ca3af" : "#000",
                    fontWeight: "normal",
                  },
                },
              ],
              series: [
                {
                  name: `${data1.name}${formatName()}`,
                  type: data1.type,
                  symbol:
                    data1.areastyle || data1.type === "line"
                      ? "none"
                      : "circle",
                  color: data1.color ? data1.color : "#16a34a",
                  lineStyle: {
                    width: 3,
                  },
                  areaStyle: {
                    color: "#16a34a55",
                  },
                  barWidth: barWidth ? barWidth : "60%",
                  data:
                    data1 &&
                    data[0].map((item: any) => item[`${data1.dataName}`]),
                  smooth: data1.areastyle,
                  large: true,
                },
                data2 && {
                  name: `${data2.name}${formatName()}`,
                  type: data2.type,
                  yAxisIndex: 1,
                  symbol: "none",
                  color: data2.color ? data2.color : "#dc2626",
                  lineStyle: {
                    width: 3,
                  },
                  // areaStyle:
                  //   data2.areastyle &&
                  //   areastyling(
                  //     data[1].map((item: any) => item[`${data2.dataName}`])
                  //   ),
                  areaStyle: {
                    color: "#dc262655",
                  },
                  barWidth: barWidth ? barWidth : "60%",
                  data:
                    data2 &&
                    data[1].map((item: any) => item[`${data2.dataName}`]),
                  smooth: data2.areastyle,
                  large: true,
                },
              ],
            }}
          />
        )}
      </GraphWrapper>
    </div>
  );
}
