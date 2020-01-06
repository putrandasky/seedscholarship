export const Dragging = {
  data() {
    return {
      editable: true,
      isDragging: false,
      delayedDragging: false,
      isChanged: false,
    };
  },
  watch: {
    isDragging(newValue) {
      if (newValue) {
        this.delayedDragging = true;
        return;
      }
      this.$nextTick(() => {
        this.delayedDragging = false;
      });
    }
  },

  computed: {
    dragOptions() {
      return {
        animation: 1,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost',
        handle: '.my-handle'
      };
    }
  },
  methods: {
    orderList() {
      this.isChanged = false;
      this.items = this.items.sort((one, two) => {
        return one.order - two.order;
      });
    },
    onMove({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      );
    },
  }
};
