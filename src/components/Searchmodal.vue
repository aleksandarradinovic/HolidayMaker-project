<template>
    <div class="modal-backdrop">
        <div class="modal">

            <section class="modal-body">
                <slot> 
                <h1>ALEKSANDAR</h1>
                </slot>
            </section>

      <footer class="modal-footer">
        <slot name="footer">
          This is the default footer!
          <h1>BAJS</h1>
        </slot>
        <button
          type="button"
          class="btn-green"
          @click="close"
        >
          Close Modal
        </button>
      </footer>
        </div>
    </div>
</template>

<script>
export default{
    name: 'SearchModal',
    
    methods: {
      close() {
        this.$emit('close');
      },
    },
}
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(139, 141, 238, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .modal {
      max-width: 500px;
      max-height: 400px;
    background: #daf3edcc;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;

    display: flex;
    flex-direction: column;
    
    height: 100%;
    position:relative;
    margin:0 auto;
    padding:3em;
    -webkit-overflow-scrolling: touch;
  }


  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>