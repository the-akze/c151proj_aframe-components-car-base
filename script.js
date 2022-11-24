AFRAME.registerComponent("base", {
  schema: {
    radius: { type: "number", default: 2 },
    height: { type: "number", default: 0.05 },
    color: { type: "string", default: "#ffffff" },
  },
  init: function () {
    this.el.setAttribute("geometry", {
      primitive: "cylinder",
      height: this.data.height,
      radius: this.data.radius,
    });
    this.el.setAttribute("material", { color: this.data.color });
  },
});

AFRAME.registerComponent("car", {
  schema: {
    spinDuration: { type: "number", default: 2 },
    sizeMultiplier: { type: "number", default: 1 },
  },
  init: function () {
    this.el.setAttribute("gltf-model", "#car");
    var s = this.data.sizeMultiplier * 0.05;
    this.el.setAttribute("scale", { x: s, y: s, z: s });
    this.el.setAttribute("animation", {
      property: "rotation",
      to: "0 360 0",
      easing: "linear",
      loop: true,
      dur: 5000,
    });
  },
});
