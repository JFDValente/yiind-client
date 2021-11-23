function to(valueOrPromiseItDoesntMatter) {
  /*
   * Wrapping up with Promise.resolve will guarantee that the `.then()`
   * method will exist and keep the function always returning a promise.
   */
  const promise = Promise.resolve(valueOrPromiseItDoesntMatter);
  return promise.then(
    data => [null, data],
    async error => {
      let formattedError = {};
      try {
        formattedError = await error.json();
      } catch (error) {
        console.log(error);
        formattedError['mensagem'] = 'Houve um erro tentar realizar esta operação';
      }
      return [formattedError, null];
    },
  );
}

export default to;
