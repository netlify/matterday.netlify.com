import { serve } from "https://deno.land/std@0.131.0/http/server.ts";
import supabase from "../_utils/supabase.js";
import getShareImage from "https://cdn.skypack.dev/@jlengstorf/get-share-image";

serve(async (req) => {
  try {
    const {
      record: { id },
    } = await req.json();

    const { data: matter } = await supabase
      .from("matters")
      .select("*")
      .match({ id })
      .single();

    // TODO: update this to be matterday image template, correct colours and fonts

    const socialImage = getShareImage({
      title: matter.content,
      tagline: "#matterday",
      cloudName: "jlengstorf",
      imagePublicID: "lwj/blog-post-card",
      titleFont: "futura",
      taglineFont: "futura",
      textColor: "232129",
      taglineColor: "232129",
      titleColor: "232129",
    });

    const { data: result } = await supabase
      .from("matters")
      .update({ og_image: socialImage })
      .match({ id });

    return new Response(JSON.stringify({ result }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ e }), {
      headers: { "Content-Type": "application/json" },
    });
  }
});
