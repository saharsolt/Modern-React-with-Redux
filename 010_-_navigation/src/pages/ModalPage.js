import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I accept
      </Button>{" "}
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept!</p>
    </Modal>
  );
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet
        lobortis erat, nec hendrerit metus maximus id. Sed felis dolor,
        vestibulum nec mauris sit amet, viverra porta nunc. Duis est dolor,
        fermentum vel placerat ac, tincidunt eu leo. Nullam sit amet fermentum
        libero. Vivamus vel urna quis lectus pulvinar posuere. Nam sollicitudin
        felis malesuada, vulputate metus quis, porta odio. Nulla vitae malesuada
        enim, nec dignissim urna. Vestibulum in enim luctus, mollis mauris a,
        blandit ante. Integer lacinia tempus nibh a pellentesque. In a turpis et
        dui accumsan accumsan. Cras ac augue id lorem porta fringilla a aliquet
        justo. Nam et ipsum vitae elit accumsan suscipit. Nullam magna eros,
        efficitur sed mi vitae, dapibus vulputate metus. Proin consectetur, enim
        pellentesque cursus sodales, sapien libero finibus ante, sit amet
        molestie magna odio vitae diam. Aenean enim felis, pellentesque non
        gravida sit amet, eleifend mattis nibh. Pellentesque at diam et tellus
        faucibus aliquet et et purus. Nullam blandit purus a laoreet mollis.
        Suspendisse mattis libero vel dapibus tempus. Nam imperdiet pulvinar
        gravida. Pellentesque placerat arcu dolor, quis porttitor justo
        consectetur eget. Nulla felis nulla, blandit non commodo in, rutrum ac
        massa. Aenean et metus sapien. Maecenas rhoncus eu metus et tincidunt.
        Mauris et euismod tortor. Integer blandit aliquet mi quis consequat. Sed
        lobortis libero semper dictum molestie. Mauris convallis eget augue ac
        interdum. Quisque quis volutpat magna, non bibendum erat. Vivamus ac
        purus eleifend, fermentum nulla ut, egestas orci. Etiam facilisis tortor
        augue, eu malesuada massa lacinia ut. Aenean pellentesque, massa ac
        lobortis posuere, urna erat hendrerit lacus, eu ultricies nunc arcu id
        odio. Cras elementum vitae libero nec efficitur. Nulla quam eros,
        dignissim sed ante ut, volutpat interdum ante. Nunc vel enim eget quam
        mattis sodales. In hac habitasse platea dictumst. Etiam aliquet, leo at
        tempus commodo, elit lorem auctor urna, a porta justo nunc sed ante. In
        pharetra leo nec metus pulvinar, finibus aliquet est vehicula. Nullam
        quis tincidunt orci. Vestibulum pharetra, felis quis blandit maximus,
        tortor sapien lobortis lacus, eget sollicitudin libero dolor id nibh.
        Duis vulputate volutpat nibh, at sagittis magna hendrerit at. Aliquam
        suscipit fermentum purus nec vulputate. Curabitur rhoncus accumsan enim,
        vitae suscipit nisl elementum vel. Nam non viverra velit. Mauris ornare
        libero at lectus facilisis auctor. Nullam nec metus tristique, dignissim
        est ut, feugiat ipsum. Donec nec molestie urna. Aliquam purus sem,
        gravida ac auctor ac, tristique lobortis mi. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras
        rutrum, risus in bibendum porta, elit nisl ultricies turpis, nec gravida
        arcu turpis ac felis. Quisque tempor odio ut odio porttitor interdum
        commodo sit amet massa. Cras at felis viverra, fringilla nisi accumsan,
        lacinia mauris. Mauris orci odio, maximus ut commodo non, efficitur
        vestibulum felis. Fusce vitae eros eros. Maecenas consequat condimentum
        nulla quis vestibulum. Vestibulum tincidunt posuere erat, ut lobortis
        felis porta quis. Praesent viverra arcu diam, eget pretium nisi euismod
        in. Nullam nulla felis, pellentesque quis tristique sit amet, accumsan
        ac felis. Donec lacinia nunc urna.
      </p>
      <Button onClick={handleClick} primary>
        Open Modal!
      </Button>

      {showModal && modal}
    </div>
  );
}

export default ModalPage;
