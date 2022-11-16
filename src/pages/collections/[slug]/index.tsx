import {useRouter} from "next/router";

const Slug = () => {
  const router = useRouter();
  const slug = router.query.slug;
  return <div>
    slug {slug}
  </div>
}

export default Slug