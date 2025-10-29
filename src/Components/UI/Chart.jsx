import React, {
  useContext,
  useId,
  useMemo,
  useEffect,
  forwardRef,
} from "react";
import * as Recharts from "recharts";
import "./Chart.css"; // use plain CSS

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" };

// Chart configuration context
const ChartContext = React.createContext(null);

export function useChart() {
  const context = useContext(ChartContext);
  if (!context)
    throw new Error("useChart must be used within a <ChartContainer />");
  return context;
}

// Chart Container
const ChartContainer = forwardRef(
  ({ id, className = "", children, config, ...props }, ref) => {
    const uniqueId = useId();
    const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

    return (
      <ChartContext.Provider value={{ config }}>
        <div
          data-chart={chartId}
          ref={ref}
          className={`chart-container ${className}`}
          {...props}
        >
          <ChartStyle id={chartId} config={config} />
          <Recharts.ResponsiveContainer>
            {children}
          </Recharts.ResponsiveContainer>
        </div>
      </ChartContext.Provider>
    );
  }
);

// Chart dynamic CSS styling based on config
const ChartStyle = ({ id, config }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, conf]) => conf.theme || conf.color
  );
  if (!colorConfig.length) return null;

  const styleContent = Object.entries(THEMES)
    .map(([theme, prefix]) => {
      const colorVars = colorConfig
        .map(([key, conf]) => {
          const color = conf.theme?.[theme] || conf.color;
          return color ? `  --color-${key}: ${color};` : null;
        })
        .join("\n");
      return `${prefix} [data-chart=${id}] {\n${colorVars}\n}`;
    })
    .join("\n");

  return <style dangerouslySetInnerHTML={{ __html: styleContent }} />;
};

// Tooltip
const ChartTooltip = Recharts.Tooltip;

const ChartTooltipContent = forwardRef(
  (
    {
      active,
      payload,
      className = "",
      indicator = "dot",
      hideLabel = false,
      hideIndicator = false,
      label,
      labelFormatter,
      formatter,
      color,
      nameKey,
      labelKey,
    },
    ref
  ) => {
    const { config } = useChart();

    const tooltipLabel = useMemo(() => {
      if (hideLabel || !payload?.length) return null;
      const [item] = payload;
      const key = labelKey || item.dataKey || item.name || "value";
      const itemConfig = getPayloadConfig(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label]?.label || label
          : itemConfig?.label;

      if (labelFormatter)
        return (
          <div className="chart-tooltip-label">
            {labelFormatter(value, payload)}
          </div>
        );
      if (!value) return null;
      return <div className="chart-tooltip-label">{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, config, labelKey]);

    if (!active || !payload?.length) return null;
    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div ref={ref} className={`chart-tooltip ${className}`}>
        {!nestLabel ? tooltipLabel : null}
        <div className="chart-tooltip-list">
          {payload.map((item, index) => {
            const key = nameKey || item.name || item.dataKey || "value";
            const itemConfig = getPayloadConfig(config, item, key);
            const indicatorColor = color || item.payload.fill || item.color;

            return (
              <div key={item.dataKey} className="chart-tooltip-item">
                {!hideIndicator && (
                  <div
                    className={`indicator ${indicator}`}
                    style={{
                      backgroundColor: indicatorColor,
                      borderColor: indicatorColor,
                    }}
                  />
                )}
                <div className="chart-tooltip-text">
                  <span className="chart-tooltip-name">
                    {itemConfig?.label || item.name}
                  </span>
                  <span className="chart-tooltip-value">
                    {item.value?.toLocaleString()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

// Legend
const ChartLegend = Recharts.Legend;

const ChartLegendContent = forwardRef(
  (
    {
      className = "",
      hideIcon = false,
      payload,
      verticalAlign = "bottom",
      nameKey,
    },
    ref
  ) => {
    const { config } = useChart();
    if (!payload?.length) return null;

    return (
      <div
        ref={ref}
        className={`chart-legend chart-legend-${verticalAlign} ${className}`}
      >
        {payload.map((item) => {
          const key = nameKey || item.dataKey || "value";
          const itemConfig = getPayloadConfig(config, item, key);

          return (
            <div key={item.value} className="chart-legend-item">
              {!hideIcon && (
                <div
                  className="chart-legend-color"
                  style={{ backgroundColor: item.color }}
                />
              )}
              <span className="chart-legend-label">{itemConfig?.label}</span>
            </div>
          );
        })}
      </div>
    );
  }
);

// Helper
function getPayloadConfig(config, payload, key) {
  if (typeof payload !== "object" || !payload) return undefined;
  const innerPayload =
    "payload" in payload && typeof payload.payload === "object"
      ? payload.payload
      : undefined;
  let configKey = key;

  if (payload[key]) configKey = payload[key];
  else if (innerPayload && innerPayload[key]) configKey = innerPayload[key];

  return config[configKey] || config[key];
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
};
