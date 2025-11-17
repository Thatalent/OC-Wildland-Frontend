import Banner from "../components/Banner/HomeBanner";
import PostsList from "../components/PostList";

export default function Home() {
  return (
    <>
      {/* ⭐ BANNER MUST BE RENDERED BEFORE PAGE CONTENT */}
      <Banner />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Welcome to OC Wildland</h1>
        <p className="mb-6 text-gray-700">
          This is the homepage of your OC Wildland project. Here you'll find all the latest posts.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
          <PostsList />
        </section>
      </div>
    </>
  );
}
