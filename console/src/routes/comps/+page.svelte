<script lang="ts">
  import Heading from '$lib/components/heading/index.svelte'
  import PageWithMenu from '$lib/components/page/template/menu2/index.svelte'
  import Spacer from '$lib/components/layout/spacer/index.svelte'
  import {
    Button2,
    Checkbox2,
    Dropdown2,
    Link,
    Radio2,
    Switch2,
    Tab,
    TextInput2,
    Typo,
  } from '$lib/components'
</script>

<PageWithMenu>
  <div class="island">
    <!-- <Heading value="Old heading" />
    <Spacer h={48} />
    <div style="display: inline-block">
      <Typo variant="display" size={6}>Hellos</Typo>
      <Typo variant="display" size={6}>Some <a href="https://example.com">link</a></Typo>
      <Typo variant="display" color="red" size={6} style="letter-spacing: 1rem; --color:green">
        Hellos
      </Typo>
    </div>
    <Typo variant="display" size={6}>Hellos</Typo>
    <Button2>Hallo again</Button2>
    <Button2 icon="plus" disabled={true}>Hallo again</Button2>-->
    <Typo variant="display" size={6}>Hellos</Typo>
    <Button2>Hallo</Button2>
    <Button2 size="large">Hallo again</Button2>
    <TextInput2 label="How now?" error="sdfsdf" />
    <Dropdown2
      items={[
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
        { label: 'Two sdfsd sdf sd ', value: 3 },
        { label: 'TTfsd sdf sd ', value: 4 },
      ]}
    />
    <Checkbox2 />
    <Radio2 />
    <Switch2 />
    <Tab>Lala</Tab>
    <Link href="settings">This is a local link</Link>
    <Link href="example.com/huh" external bold size="small">This is an external link</Link>
    <Link href="example.com/huh" external bold size="medium">This is an external link</Link>
    <Link href="example.com/huh" external bold size="large" icon="close"
      >This is an external link</Link
    >
  </div>
</PageWithMenu>

<style>
  .island {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 10px;
    width: 100%;
    max-width: 920px;
    min-height: 700px;
    /* padding: 20px 0; */
  }
</style>
