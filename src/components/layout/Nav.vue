<template>
  <div class="hero">
    <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>

  <Home />
  <Service />
  <About />
  <Works />
  <Webss />
  <Optamstion />
  <Copration />
  <Storeapp class="mt-4" />
  <Blog />
  <Testmelions />
  <Coo />
</template>

<script>
import Home from "../../views/Home.vue";
import Service from "../../views/Service.vue";
import About from "../../views/About.vue";
import Works from "../../views/Works.vue";
import Webss from "../../views/Webss.vue";
import Optamstion from "../../views/Optamstion.vue";
import Copration from "../../views/Copration.vue";
import Storeapp from "../../views/Storeapp.vue";
import Blog from "../../views/Blog.vue";
import Testmelions from "../../views/Testmelions.vue";
import Coo from "../../views/Coo.vue";

export default {
  name: "nav",
  data() {
    return {
      currentPath: window.location.pathname,

      canvasWidth: window.innerWidth,
      canvasHeight: window.innerHeight,
      points: [],
      pointCount: 100,

      mouseX: null,
      mouseY: null,
    };
  },
  components: {
    Home,
    Service,
    About,
    Works,
    Webss,
    Optamstion,
    Copration,
    Storeapp,
    Blog,
    Testmelions,
    Coo,
  },

  methods: {
    initPoints() {
      for (let i = 0; i < this.pointCount; i++) {
        this.points.push({
          x: Math.random() * this.canvasWidth,
          y: Math.random() * this.canvasHeight,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
        });
      }
    },
    drawPoints(ctx) {
      ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.points.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;

        if (point.x < 0 || point.x > this.canvasWidth) point.dx *= -1;
        if (point.y < 0 || point.y > this.canvasHeight) point.dy *= -1;

        ctx.beginPath();
        ctx.arc(point.x, point.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = "#eee";
        ctx.fill();
      });

      for (let i = 0; i < this.points.length; i++) {
        for (let j = i + 1; j < this.points.length; j++) {
          let dist = Math.sqrt(
            Math.pow(this.points[i].x - this.points[j].x, 2) +
              Math.pow(this.points[i].y - this.points[j].y, 2)
          );
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(this.points[i].x, this.points[i].y);
            ctx.lineTo(this.points[j].x, this.points[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - dist / 150})`;
            ctx.stroke();
          }
        }
      }

      if (this.mouseX !== null && this.mouseY !== null) {
        this.points.forEach((point) => {
          let dist = Math.sqrt(
            Math.pow(this.mouseX - point.x, 2) +
              Math.pow(this.mouseY - point.y, 2)
          );
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(this.mouseX, this.mouseY);
            ctx.lineTo(point.x, point.y);
            ctx.strokeStyle = `rgba(255, 0, 0, ${1 - dist / 150})`;
            ctx.stroke();
          }
        });
      }
    },
    animate() {
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");

      const animateLoop = () => {
        this.drawPoints(ctx);
        requestAnimationFrame(animateLoop);
      };

      animateLoop();
    },
    updateMousePosition(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },
  },
  mounted() {
    this.initPoints();
    this.animate();
  },

  created() {
    this.$watch(
      () => this.$route.path,
      (newPath, oldPath) => {
        this.currentPath = newPath;
      }
    );
  },
};
</script>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden; /* للتأكد من أن الـ canvas يغطي كامل المساحة */
  background-color: #25006c;
}

canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

/*  */

.btn {
  display: inline-block;
  font-size: 16px;
  font-weight: 500;
  color: white;
  border: 3px solid #e81212;
  background-color: #e81212;
  cursor: pointer;
  position: relative;
  background-color: transparent;
  text-decoration: none;
  overflow: hidden;
  width: 130px;
  padding: 7px;
  border-radius: 6px;
  z-index: 1;
  font-family: inherit;
}
.btn:hover {
  color: #a81212;
}
.btn::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #e81212;
  transform: translateX(0%);
  transition: all 0.3s;
  z-index: -1;
}

.btn:hover::before {
  transform: translateX(100%);
}
/* .rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
} */
@media (max-width: 477px) {
  .btn {
    margin: 10px 0;
  }
}
</style>
