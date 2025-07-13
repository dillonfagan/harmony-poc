export const showModal = (id: string) => {
  (document.getElementById(id) as HTMLDialogElement | null)?.showModal();
};