<template>
  <div :class="['tag-list', `tag-list--${alignment}`]" ref="tagList">
    <v-chip
      v-for="(tag, index) in visibleTags"
      :key="`tag-${index}`"
      class="tag-list__tag"
    >
      <v-icon v-if="tag.icon">{{ tag.icon }}</v-icon>
      {{ tag.text }}
    </v-chip>
    <v-icon
      v-for="index in separatorCount"
      :key="`separator-${index}`"
      class="tag-list__separator"
    >
      mdi-circle-small
    </v-icon>
  </div>
</template>

<script>
export default {
  name: "TagList",
  props: {
    tags: {
      type: Array,
      required: true,
    },
    alignment: {
      type: String,
      default: "left",
    },
  },
  data() {
    return {
      visibleTags: [],
      separatorCount: 0,
    };
  },
  mounted() {
    this.updateVisibleTags();
    window.addEventListener("resize", this.updateVisibleTags);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateVisibleTags);
  },
  methods: {
    updateVisibleTags() {
      this.$nextTick(() => {
        const containerWidth = this.$refs.tagList.offsetWidth;
        let totalWidth = 0;
        this.visibleTags = [];
        this.separatorCount = 0;

        for (let tag of this.tags) {
          const tagElement = document.createElement("span");
          tagElement.style.visibility = "hidden";
          tagElement.classList.add("tag-list__tag");
          tagElement.innerHTML = tag.icon
            ? `<v-icon>${tag.icon}</v-icon> ${tag.text}`
            : tag.text;
          document.body.appendChild(tagElement);

          const tagWidth = tagElement.offsetWidth;
          const separatorWidth = 24;

          if (totalWidth + tagWidth + separatorWidth <= containerWidth) {
            totalWidth += tagWidth + separatorWidth;
            this.visibleTags.push(tag);
            this.separatorCount++;
          } else {
            document.body.removeChild(tagElement);
            break;
          }
          document.body.removeChild(tagElement);
        }

        if (this.separatorCount > 0) {
          this.separatorCount--;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "./TagList.scss";
</style>
