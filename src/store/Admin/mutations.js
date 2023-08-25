export default {
  updateNavVisibility(state, visibility) {
    state.navVisibility = visibility;
  },
  updateCategories(state, categories) {
    state.categories = categories;
  },
  updateCategoryName(state, updateName) {
    state.newCategoryName = updateName;
  },
};
