import { loadCsf } from '@storybook/csf-tools';
import { compile } from '@storybook/mdx2-csf';

module.exports = async (fileName, opts) => {
    const title = fileName.split('/').pop().replace(/\.(md|html)$/, '');

    // Convert Markdown into MDX
    const source = `
      import { Meta, Description } from '@storybook/blocks';

      <Meta title='${title}' />
      <Description>{require('${fileName}')}</Description>
  `;

    // Compile MDX into CSF
    const code = await compile(source, {});

    // Parse CSF component
    return loadCsf(code, { ...opts, fileName }).parse();
}