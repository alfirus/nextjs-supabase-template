import PreviewReactComponent from "@/components/PreviewReactComponent"
export default function Page() {
  return (
    <div className="w-full">
      <h1>React Preview</h1>
      <p>Write some JSX code in the textarea below and click the button to see the preview.</p>
      <PreviewReactComponent />
    </div>
  )
}