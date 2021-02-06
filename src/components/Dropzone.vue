<template>
  <div>
    <div id="claimDropzone"
         action="http://10.0.0.108:8080/file/upload"
         class="dropzone"
         data-url-init="/ajax/upload/files">
      <div class="dz-message" data-dz-message>
        <span>Перетащите мышкой необходимые файлы или кликнете в поле для выбора файлов.</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    uploadFiles() {
      this.axios.post('/single-file',
          {
            1: 1
          },
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
      ).then(function () {
        console.log('SUCCESS!!');
      }).catch(function () {
        console.log('FAILURE!!');
      });
    }
  }
}
</script>