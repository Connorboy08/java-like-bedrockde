export const state = {
  toggles: new Map()
};

export function toggle(player, key) {
  const id = player.id;
  if (!state.toggles.has(id)) state.toggles.set(id, {});
  const data = state.toggles.get(id);
  data[key] = !data[key];
  return data[key];
}
