(() => {
  const id = () => crypto.randomUUID();

  const makeClass = (name) => ({
    _id: id(),
    fake: false,
    type: "class",
    name,
    namespace: "",
    comb: "",
    styleLess: "",
    variants: {},
    children: [],
    createdBy: "5e7dc1fb0e1cdb5934ae861e",
    origin: null,
    selector: null,
  });

  const baseData = (tag, attrs = {}, xattrs = []) => ({
    tag,
    text: false,
    devlink: { runtimeProps: {}, slot: "" },
    displayName: "",
    attr: { id: "", ...attrs },
    xattr: xattrs,
    search: { exclude: false },
    visibility: {
      conditions: [],
      keepInHtml: { tag: "False", val: {} },
    },
  });

  const textNode = (value) => ({
    _id: id(),
    text: true,
    v: value,
  });

  const classes = {
    component: makeClass("stat-showcase_component"),
    primary: makeClass("stat-showcase_primary"),
    dotGrid: makeClass("stat-showcase_dot-grid"),
    dot: makeClass("stat-showcase_dot"),
    isOutline: makeClass("is-outline"),
    metric: makeClass("stat-showcase_metric"),
    value: makeClass("stat-showcase_value"),
    label: makeClass("stat-showcase_label"),
    secondary: makeClass("stat-showcase_secondary"),
    secondaryTop: makeClass("stat-showcase_secondary-top"),
    secondaryValue: makeClass("stat-showcase_secondary-value"),
    secondaryLabel: makeClass("stat-showcase_secondary-label"),
    secondaryBottom: makeClass("stat-showcase_secondary-bottom"),
  };

  const componentId = id();
  const primaryId = id();
  const dotGridId = id();
  const metricId = id();
  const valueId = id();
  const labelId = id();
  const secondaryId = id();
  const secondaryTopId = id();
  const secondaryValueId = id();
  const secondaryLabelId = id();
  const secondaryBottomId = id();

  const primaryValue = textNode("00x");
  const primaryLabel = textNode("Lorem ipsum dolor sit amet.");
  const secondaryValue = textNode("95%");
  const secondaryLabel = textNode("Lorem ipsum dolor sit amet");

  const dots = Array.from({ length: 10 }, (_, index) => ({
    _id: id(),
    type: "Block",
    tag: "div",
    classes: index === 0
      ? [classes.dot._id, classes.isOutline._id]
      : [classes.dot._id],
    children: [],
    data: baseData("div", { "aria-hidden": "true" }),
  }));

  const nodes = [
    {
      _id: componentId,
      type: "Block",
      tag: "div",
      classes: [classes.component._id],
      children: [primaryId, secondaryId],
      data: baseData("div", { role: "group", "aria-label": "Key statistics" }, [
        { name: "data-stat-showcase", value: "component" },
      ]),
    },
    {
      _id: primaryId,
      type: "Block",
      tag: "div",
      classes: [classes.primary._id],
      children: [dotGridId, metricId],
      data: baseData("div"),
    },
    {
      _id: dotGridId,
      type: "Block",
      tag: "div",
      classes: [classes.dotGrid._id],
      children: dots.map((dot) => dot._id),
      data: baseData("div", { "aria-hidden": "true" }),
    },
    ...dots,
    {
      _id: metricId,
      type: "Block",
      tag: "div",
      classes: [classes.metric._id],
      children: [valueId, labelId],
      data: baseData("div"),
    },
    {
      _id: valueId,
      type: "Heading",
      tag: "h2",
      classes: [classes.value._id],
      children: [primaryValue._id],
      data: baseData("h2"),
    },
    primaryValue,
    {
      _id: labelId,
      type: "Paragraph",
      tag: "p",
      classes: [classes.label._id],
      children: [primaryLabel._id],
      data: baseData("p"),
    },
    primaryLabel,
    {
      _id: secondaryId,
      type: "Block",
      tag: "div",
      classes: [classes.secondary._id],
      children: [secondaryTopId, secondaryBottomId],
      data: baseData("div"),
    },
    {
      _id: secondaryTopId,
      type: "Block",
      tag: "div",
      classes: [classes.secondaryTop._id],
      children: [secondaryValueId, secondaryLabelId],
      data: baseData("div"),
    },
    {
      _id: secondaryValueId,
      type: "Heading",
      tag: "h2",
      classes: [classes.secondaryValue._id],
      children: [secondaryValue._id],
      data: baseData("h2"),
    },
    secondaryValue,
    {
      _id: secondaryLabelId,
      type: "Paragraph",
      tag: "p",
      classes: [classes.secondaryLabel._id],
      children: [secondaryLabel._id],
      data: baseData("p"),
    },
    secondaryLabel,
    {
      _id: secondaryBottomId,
      type: "Block",
      tag: "div",
      classes: [classes.secondaryBottom._id],
      children: [],
      data: baseData("div", { "aria-hidden": "true" }),
    },
  ];

  const data = {
    type: "@webflow/XscpData",
    payload: {
      nodes,
      styles: Object.values(classes),
      assets: [],
      ix1: [],
      ix2: {
        interactions: [],
        events: [],
        actionLists: [],
      },
    },
    meta: {
      droppedLinks: 0,
      dynBindRemovedCount: 0,
      dynListBindRemovedCount: 0,
      paginationRemovedCount: 0,
      universalBindingsRemovedCount: 0,
      unlinkedSymbolCount: 0,
      codeComponentsRemovedCount: 0,
      richTextComponentsStripped: false,
    },
  };

  document.addEventListener("copy", (event) => {
    event.clipboardData.setData("application/json", JSON.stringify(data));
    event.preventDefault();
  }, { once: true });

  document.execCommand("copy");
  console.log("Copied Stat Showcase component. Paste it into Webflow Designer.");
})();
